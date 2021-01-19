const websiteid = process.env.TELEGRAM_COMMENTS_APP_WEBSITE_ID;

export default function TelegramComments({ datapageid }) {
  return (
    <div>
      <script
        async
        src="https://comments.app/js/widget.js?3"
        data-comments-app-website={websiteid}
        data-limit="50"
        data-page-id={datapageid}
        data-color="0068FF"
        data-dislikes="1"
        data-outlined="1"
        data-dark="1"
      />
    </div>
  );
}
