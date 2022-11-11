
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowTrainers(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="firstname" />
<TextField source="lastname" />
<NumberField source="contactint" />
<ReferenceField source="trainingcoursesid" reference="trainingcourses" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}