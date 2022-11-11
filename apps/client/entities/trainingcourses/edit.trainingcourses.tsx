
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditTrainingcourses(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="description" variant="outlined"   />

      </SimpleForm>
    </Edit>
  );
}