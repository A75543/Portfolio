export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold">Personal Email:</p>
          <p className="text-blue-500 mb-4">
            <a href="mailto:alberto75543@gmail.com">alberto75543@gmail.com</a>
          </p>
          
          <p className="text-lg font-semibold">Student Email:</p>
          <p className="text-blue-500 mb-4">
            <a href="mailto:arosas28@horizon.csueastbay.edu">arosas28@horizon.csueastbay.edu</a>
          </p>
          
          <p className="text-lg font-semibold">Phone Number:</p>
          <p className="text-gray-700">(510) 470-4452</p>
        </div>
      </div>
    </section>
  );
}
