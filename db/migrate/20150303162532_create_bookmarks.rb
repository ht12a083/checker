class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.integer :user_id
      t.string :name,	       null:false
      t.string :account_id,	 null:false
      t.string :site,		     null:false

      t.timestamps
    end

    add_index :bookmarks, :user_id
  end
end
