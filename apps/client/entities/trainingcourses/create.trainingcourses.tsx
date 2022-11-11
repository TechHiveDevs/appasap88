
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateTrainingcourses(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="description" variant="outlined"   />

        </SimpleForm>
      </Create>
    );
  }
