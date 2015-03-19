class Bookmark < ActiveRecord::Base
	validates :name, presence: true
	validates :account_id, presence: true
	validates :site, presence: true
	VALID_NICOLIVE_REGEX = /co\d+/
	VALID_FC2_REGEX = /\d+/
	validates :account_id, format: { with: VALID_NICOLIVE_REGEX }, if: :nicolive?
	validates :account_id, format: { with: VALID_FC2_REGEX }, if: :fc2?

	def nicolive?
		site == "nicolive"
	end

	def fc2?
		site == "fc2"
	end

end
