
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowEvaluationforms(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="evaluationdate" />
<TextField source="evaluationtext" />
<TextField source="evaluationtype" />
<ReferenceField source="blankevaluationformid" reference="blankevaluationform" />
<ReferenceField source="trainingcoursesid" reference="trainingcourses" />
<ReferenceField source="trainersid" reference="trainers" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}