# Talk Template

This is a template I use to bootstrap my talks, it has all the main components I need to give a good presentation that is well thought out and designed.

## Slides

### Title

The title slide is the first slide, where you pass through:

- Talk Title (title)
- Talk Subtitle (subtitle)
- Author Name (author)
- Event Name (event)

```svelte
<Title
    title="Your Talk Title"
    subtitle="A little tag line for your talk"
    author="Some Person"
    event="SomethingCon 2023"
/>
```

### About

The about slide is where you explain who you are, where you work, and your socials.

- Author Name (author)
- Job Role (role)
- Company Name (company)
- GitHub Username (github)
- X or Twitter Username (x)
- URL to your Avatar (avatar)

```svelte
<About
    author="Some Persone"
    role="Chief Tea Brewer"
    company="PG Tips"
    github="pg"
    x="pg"
    avatar="https://unavatar.io/github/mdo"
/>
```

### Selfie

I personally like to talk a selfie in all of my talks, this slide lets me pause to do it - adding a little fun.

- URL to your Avatar (avatar)

```svelte
<Selfie
    avatar="https://unavatar.io/github/mdo"
/>
```

### Quote

I like to add quotes sometimes, often my own quote that sums up the message I want to get across.

- Author Name (author)
- Company Name (company)
- Url to the Avatar (avatar)
- Text Quote (quote)

```svelte
<Quote
    author="Some Person"
    company="PG Tips"
    avatar="https://unavatar.io/github/mdo"
    quote="Some quote"
/>
```

### One Slot

Sometimes I want a certain behavior, such as a slide with a title that transitions nicely to show the content passed in. That is what this slide is for.

- Slide Title (title)

```svelte
<OneSlot
    title="A Standard Controller"
>
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
```

### Thanks

The final slide, that simply says thanks for listening and then has the wave emoji.

```svelte
<Thanks />
```

### File Wrapper (work in progress)

This is a file wrapper so that I can write the content for my slides in Markdown files.

Currently it isn't respecting formatting of the content - but it does pull it in.

- Relative path to file (file)

```svelte
<FileWrapper
    file="./../content/example.md"
/>
```