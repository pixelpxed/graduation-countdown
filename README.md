<img width="128" height="128" alt="graduation-countdown" src="https://github.com/user-attachments/assets/b8b7c573-d49e-40dc-8ba4-15d9f15b2c22" />

## Graduation Countdown
Graduation countdown is a highly robust, customizable, data-driven countdown timer design that allows for countdowns to graduation with timezone independence.

## Getting Started

Start by duplicating `env.template` into the project's root directory and renaming it to `.env`. Then, modify the event data according to your needs.

Environment variables documentation:
- `NEXT_PUBLIC_EVENT_NAME` : `String`
  - Event name. Shown on the title and header of the page.
- `NEXT_PUBLIC_EVENT_DESCRIPTION` : `String`
  - Event description. Shown in the embed description.
- `NEXT_PUBLIC_EVENT_PASSING_MESSAGE` : `String`
  - What to say when the event has passed.
- `NEXT_PUBLIC_ENROLLED_TIME` : `ISO 8601 (w/timezones)`
  - The first day of the event. Used to calculate/show details and percentage progress on the footer of the page.
- `NEXT_PUBLIC_GRADUATION_TIME` : `ISO 8601 (w/timezones)`
  - The ending day of the event. Used to calculate/show the time until graduation, as well as details, and percentage progress on the footer of the page.

That's all for the basics! To see the result, run the development server with:

```bash
npm run dev # Or your equivalent commands.
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. To deploy, don't forget to include your environment variables also!
