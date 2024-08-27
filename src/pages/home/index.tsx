/* eslint-disable @typescript-eslint/no-explicit-any */
import Blocks from "./components/blocks"

const Dashboard: React.FC = () => {
  const blocksData = [
    {
      title: "Meetings Scheduled",
      value: 86,
      icon: "calendar-minimalistic-linear",
      color: "indigo",
    },
    {
      title: "Requests Sent",
      value: 75,
      icon: "file-text-linear",
      color: "sky",
    },
    {
      title: "Profile Viewed",
      value: 45.673,
      icon: "user-linear",
      color: "emerald",
    },
    {
      title: "Unread Message",
      value: 93,
      icon: "letter-linear",
      color: "lime",
    },
  ]
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 items-baseline gap-6">
        {blocksData.map((item, idx) => (
          <Blocks key={idx} item={item as any} />
        ))}
      </div>
      {/* <div>
        <Personal />
      </div> */}
    </>
  )
}

export default Dashboard
