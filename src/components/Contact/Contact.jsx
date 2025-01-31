import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import useLocalStorage from "../utilities/useLocalStorage";
import useTransition from "../utilities/useTransition";

function Contact() {
    const { storedList, addToStoredItem } = useLocalStorage("contacts");
    const transition = useTransition();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const info = { name, email, message };
        if (!storedList?.some(item => item.email === email)) {
            addToStoredItem(info);
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.message.value = "";
            toast.success("Message sent successfully!");
        } else {
            toast.error("Message already exists in contacts list with the same email");
        }
    };

    return (
        <div className="px-2 max-w-2xl mx-auto py-6 md:py-12">
            <Helmet>
                <title>Contact | Gadget Heaven</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center">Contact</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 my-4 md:my-6">
                <div className="space-y-1 mb-2 md:mb-4">
                    <label className="text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="input input-bordered focus: focus:border-none w-full"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="space-y-1 mb-2 md:mb-4">
                    <label className="text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="input input-bordered focus:border-none w-full"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="space-y-1 mb-2 md:mb-4">
                    <label className="text-gray-700">Message</label>
                    <textarea
                        name="message"
                        className="textarea textarea-bordered focus:border-none w-full"
                        rows="4"
                        placeholder="Write your message"
                        required
                    />
                </div>
                <button type="submit" className={`btn glass bg-purple-600 hover:bg-gradient-to-r from-purple-800 via-purple-600 to-fuchsia-500 text-white  focus:border-none font-bold rounded-full w-full ${transition}`}>
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
