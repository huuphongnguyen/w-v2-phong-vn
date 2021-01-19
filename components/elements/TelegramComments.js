export default function TelegramComments({ pageid }) {
  return (
    <div>
      <script
        async
        src="https://comments.app/js/widget.js?3"
        data-comments-app-website={process.env.TELEGRAM_COMMENTS_APP_WEBSITE_ID}
        data-limit="20"
        data-page-id={pageid}
        data-color="0068FF"
        data-dark="1"
      ></script>
    </div>
  );
}
