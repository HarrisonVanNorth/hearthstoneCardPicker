
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cards', table => {
        table.increments();
        table.string('name');
        table.text('description');
        table.integer('attack');
        table.integer('mana');
        table.integer('health')
        table.text('img_url')
        table.timestamps(true, true);

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cards')
};
