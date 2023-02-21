import { Action, Card, Layout, SurveyTaskList } from "@careevolution/mydatahelps-ui"

export default function () {
  return (
    <Layout>
        <Card className='primary-card'>
            <Action
            title="Do you think you have COVID-19?"
            subtitle="It's important to tell us immediately if might have COVID-19.  Click or tap here to report a new infection, symptoms, or close contact."
            onClick={() => MyDataHelps.startSurvey('New COVID Infection')} />
        </Card>
        <Card>
            <SurveyTaskList status="incomplete" title="Tasks" limit={3} />
        </Card>
    </Layout>
    )};