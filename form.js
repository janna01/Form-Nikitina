document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const TELEGRAM_BOT_TOKEN = "7990014475:AAE_GImGFDvY-z_XA1JY99t9h1bknDgK0iY";
        const TELEGRAM_CHAT_ID = "-4801540981";

        const text = `Сообщение полученное с сайта:
Имя: ${name}
Почта: ${email}
Сообщение: ${message}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: text,
                }),
            });

            const result = await response.json();
            console.log("Ответ Telegram:", result);

            if (result.ok) {
                alert("Ваше сообщение отправлено!");
                form.reset();
            } else {
                alert("Ошибка при отправке!\n\n" + JSON.stringify(result, null, 2));
            }
        } catch (err) {
            console.error("Ошибка соединения:", err);
            alert("Ошибка соединения!\n\n" + err.message);
        }
    });
});
