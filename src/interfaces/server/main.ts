import { Meteor } from 'meteor/meteor'
import { LinksCollection } from '../../app/links/links'
import { createProjects } from '../../startup/database/create-projects'
import { configureDotenv } from '../../utils/env'

function insertLink(title: string, url: string) {
	LinksCollection.insert({ title, url, createdAt: new Date() })
}

Meteor.startup(() => {
	createProjects()
	configureDotenv()
	// If the Links collection is empty, add some data.
	if (LinksCollection.find().count() === 0) {
		insertLink('Say hello to Araclx Inc.', 'https://araclx.com')
	}
})
