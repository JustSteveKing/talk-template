<script lang="ts">
	import { Code, Presentation } from '@components'
	import {
		About,
		Animation,
		FileWrap,
		OneSlot,
		Quote,
		Selfie,
		Thanks,
		Title,
	} from '@lib/slides'

	let title: string = 'Talk Title'
	let subtitle: string = 'Talk subtitle'
	let author: string = 'Steve McDougall'
	let event: string = 'Event Name'
	let role: string = 'Developer Relations'
	let company: string = 'Treblle'
	let github: string = 'JustSteveKing'
	let x: string = 'JustSteveKing'
	let avatar: string = 'https://github.com/JustSteveKing.png'
</script>

<Presentation>
	<Title
		title={title}
		subtitle={subtitle}
		author={author}
		event={event}
	/>

	<About
		author={author}
		role={role}
		company={company}
		github={github}
		x={x}
		avatar={avatar}
	/>

	<Selfie
		avatar={avatar}
	/>

	<Quote
		author={author}
		company={company}
		avatar={avatar}
		quote="Building REST APIs is easy, building a good API is where the hard work really starts"
	/>

	<OneSlot title="A Standard Controller">
		<Code lang="php">
			{`
namespace App\\Http\\Controllers;

class SomeController
{
	//
}
			`}
		</Code>
	</OneSlot>

	<Animation />

	<Thanks />
</Presentation>
