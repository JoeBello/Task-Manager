/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate'

export const shorthands: ColumnDefinitions | undefined = undefined

export async function up(pgm: MigrationBuilder): Promise<void> {
	pgm.createTable('users', {
		id: 'id',
		username: { type: 'text', notNull: true, unique: true },
		task_id: { type: 'text[]', notNull: true }
	})
}

export async function down(pgm: MigrationBuilder): Promise<void> {
	pgm.dropTable('users', { ifExists: true, cascade: false })
}
