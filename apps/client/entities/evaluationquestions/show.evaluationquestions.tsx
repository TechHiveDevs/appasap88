
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
} from "react-admin";

// ------------------------------------------------

export default function ShowEvaluationquestions(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="qusetiontext" />
<TextField source="questiondescription" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}