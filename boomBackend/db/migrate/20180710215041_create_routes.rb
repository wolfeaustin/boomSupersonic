class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :departure
      t.string :arrival
      t.integer :distance
      t.string :direction

      t.timestamps
    end
  end
end
