
import { motion } from "framer-motion"
import NotificationCard from "../notification_card"

export default function Notifications (props) {
    return (
        <motion.div 
            initial={{ y: 0}}
            animate={{ y : 'var(--spacing-8)' }}
            exit={{ y : 'var(--spacing-8)' }}
        className="transition w-1/3 ease-in-out absolute h-screen transform right-40 top-0 bg-blue rounded-lg overflow-scroll shadow-lg ">
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
        </motion.div>
    )
}