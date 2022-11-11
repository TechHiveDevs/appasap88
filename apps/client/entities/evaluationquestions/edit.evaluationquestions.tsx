
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditEvaluationquestions(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="qusetiontext" variant="outlined" validate={required()}  />
<TextInput source="questiondescription" variant="outlined" validate={required()}  />

      </SimpleForm>
    </Edit>
  );
}