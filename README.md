<img width="128" height="128" alt="graduation-countdown" src="https://github.com/user-attachments/assets/b8b7c573-d49e-40dc-8ba4-15d9f15b2c22" />

## Graduation Countdown
This is a highly robust, customizable, data-driven countdown timer design that allows for countdowns to graduation with timezone independence.

## Getting Started

Start by duplicating `env.template` into the project's root directory and renaming it to `.env`. Then, modify the event data according to your needs.

Variables documentation:
- NEXT_PUBLIC_EVENT_NAME
  - Event name. Shown on the title and header of the page. (Format: **String**)
- NEXT_PUBLIC_EVENT_DESCRIPTION
  - Event description. Shown in the embed description. (Format: **String**)
- NEXT_PUBLIC_EVENT_PASSING_MESSAGE
  - What to say when the time has passed. (Format: **String**)
- NEXT_PUBLIC_ENROLLED_TIME
  - The first day of something. Used to calculate/show details and percentage progress on the footer of the page. (Format: **ISO 8601** // Don't forget timezone!)
- NEXT_PUBLIC_GRADUATION_TIME
  - The graduation day of something. Used to calculate/show the time until graduation, as well as details, and percentage progress on the footer of the page. (Format: **ISO 8601** // Don't forget timezone!)

When you're done, to see the result, run the development server with:

```bash
npm run dev # Or your equivalent commands.
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. To deploy, don't forget to set up your variables correctly.
