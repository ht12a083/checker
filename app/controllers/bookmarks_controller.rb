class BookmarksController < ApplicationController
	before_action :authenticate

	def new
		@bookmarkForm = current_user.created_bookmarks.build
	end

	def create
		@bookmark = current_user.created_bookmarks.build(bookmark_params)
		if @bookmark.save
			redirect_to root_path, notice: '作成しました'
		else
			redirect_to root_path, alert: @bookmark.errors.full_messages
		end
	end

	def destroy
		@bookmark = current_user.created_bookmarks.find(params[:id])
		@bookmark.destroy!
		redirect_to root_path, notice: '削除しました'
	end

	private

		def bookmark_params
			params.require(:bookmark).permit(:name, :account_id, :site)
		end
end
