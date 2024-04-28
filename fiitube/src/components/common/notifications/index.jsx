
import { motion } from "framer-motion"
import NotificationCard from "../notification_card"
import subscriptions from "../../../data/subscriptions.json"

export default function Notifications (props) {
    return (
        <motion.div 
            initial={{ y: 0}}
            animate={{ y : 'var(--spacing-8)' }}
            exit={{ y : 'var(--spacing-8)' }}
        className="transition w-1/3 ease-in-out absolute h-screen transform right-40 top-0 bg-blue rounded-lg overflow-scroll shadow-lg ">
            {
                subscriptions.map((subscription) => 
                <NotificationCard key={subscription.id} channel={subscription.channel_name} channelImg={subscription.channel_img}/>
            )
            }
        </motion.div>
    )
}