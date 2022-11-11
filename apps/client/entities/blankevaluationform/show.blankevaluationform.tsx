
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
} from "react-admin";

// ------------------------------------------------

export default function ShowBlankevaluationform(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="name" />
<TextField source="text" />
<TextField source="formcategories" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}