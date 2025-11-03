## Graduation Countdown
This is a highly data-customization flexible countdown timer design to count until graduation with timezone indepenentcy.

## Getting Started

Start by duplicating `env.template` into project's root, rename it to `.env`. Then, modify the event data according to your needs.

Variables documentation:
- NEXT_PUBLIC_EVENT_NAME
  - Event name. Shown on title, and header in the page. (Format: **String**)
- NEXT_PUBLIC_EVENT_DESCRIPTION
  - Event description. Shown on embeds description. (Format: **String**)
- NEXT_PUBLIC_ENROLLED_TIME
  - The first-day of something. Used to calculate/show details and percentage progress on the footer of the page. (Format: **ISO 8601** // Don't forget timezone!)
- NEXT_PUBLIC_GRADUATION_TIME
  - The graduation-day of something. Used to calculate/show the time until graduation, details and percentage progress on the footer of the page. (Format: **ISO 8601** // Don't forget timezone!)

When you're done, to see the result, run the development server with:

```bash
npm run dev # Or your equivalent tools command.
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.