
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowTrainingqualifications(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="name" />
<TextField source="description" />
<ReferenceField source="trainersid" reference="trainers" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}