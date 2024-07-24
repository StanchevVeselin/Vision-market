/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

/**
 * Sends an order confirmation email.
 * @param {Object} orderData - The order data object.
 * @return {Promise<void>}
 */
async function sendOrderConfirmationEmail(orderData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vessselllinnn@gmail.com",
      pass: "syey twmt gmwx akcc",
    },
  });

  const mailOptions = {
    from: "vessselllinnn@gmail.com",
    to: `vessselllinnn@gmail.com, ${orderData.email}`,
    subject: "Потвърждение на поръчка",
    html: `
      <p>Здравейте,</p>
      <p>Получихме нова поръчка със следните данни:</p>
      <ul>
        <li>Име: ${orderData.firstName} ${orderData.lastName}</li>
        <li>Телефон: ${orderData.phone}</li>
        <li>Адрес за доставка: ${orderData.address}</li>
        <li>Продукти:</li>
        <ul>
          ${orderData.products
      .map((product) => `<li>${product.name} - ${product.price}</li>`)
      .join("")}
        </ul>
      </ul>
      <p>Благодарим Ви!</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

exports.processOrder = functions.firestore
    .document("orders/{orderId}")
    .onCreate(async (snapshot, context) => {
      const orderData = snapshot.data();
      console.log(orderData);
      try {
        await sendOrderConfirmationEmail(orderData);
        console.log("Имейлът uспешно.");
        return null;
      } catch (error) {
        console.error("Грешка при изпращане:", error);
        throw new functions.https.HttpsError("internal", "Грешка ");
      }
    });
