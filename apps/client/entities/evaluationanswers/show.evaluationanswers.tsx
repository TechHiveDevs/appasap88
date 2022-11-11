
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowEvaluationanswers(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="answertext" />
<ReferenceField source="evaluationquestionsid" reference="evaluationquestions" />
<ReferenceField source="evaluationformsid" reference="evaluationforms" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}