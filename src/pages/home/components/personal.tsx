import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RadialChart } from "./radial-chart"

function Personal() {
  // const activityData = [
  //   {
  //     desc: "Your application has accepted in 3 Vacancy",
  //     icon: "",
  //     time: "",
  //   },
  //   {
  //     desc: "Your application has accepted in 3 Vacancy",
  //     icon: "",
  //     time: "",
  //   },
  //   {
  //     desc: "Your application has accepted in 3 Vacancy",
  //     icon: "",
  //     time: "",
  //   },
  //   {
  //     desc: "Your application has accepted in 3 Vacancy",
  //     icon: "",
  //     time: "",
  //   },
  //   {
  //     desc: "Your application has accepted in 3 Vacancy",
  //     icon: "",
  //     time: "",
  //   },
  //   {
  //     desc: "Your application has accepted in 3 Vacancy",
  //     icon: "",
  //     time: "",
  //   },
  //   {
  //     desc: "Your application has accepted in 3 Vacancy",
  //     icon: "",
  //     time: "",
  //   },
  // ]
  const programmerData = [
    {
      title: "php",
      value: 66,
      color: "orange",
    },
    {
      title: "vue",
      value: 31,
      color: "emerald",
    },
    {
      title: "laravel",
      value: 7,
      color: "teal",
    },
  ]
  return (
    <Card>
      <CardContent></CardContent>
      <CardFooter>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <RadialChart data={programmerData} />
          </CardContent>
        </Card>
      </CardFooter>
    </Card>
  )
}

export default Personal
