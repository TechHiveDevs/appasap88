
import {
  List,
  Datagrid,
  
NumberField,
DateField,
TextField,
ReferenceField,
  ShowButton,
  EditButton, 
  DeleteButton,
  TextInput
} from "react-admin";
import Actions from "../../react-admin/components/Actions";

// ------------------------------------------------

const filters = [
  <TextInput label="Search" source="q" variant="outlined" />,
];

// ------------------------------------------------

export default function ListEvaluationforms(props: any) {
return (
    <List {...props} filters={filters}>
    <Datagrid>
        <NumberField source="id" />
<TextField source="evaluationdate" />
<TextField source="evaluationtext" />
<TextField source="evaluationtype" />
<ReferenceField source="blankevaluationformid" reference="blankevaluationform" />
<ReferenceField source="trainingcoursesid" reference="trainingcourses" />
<ReferenceField source="trainersid" reference="trainers" />
<DateField source="createdAt" />
<Actions>
        <ShowButton />
        <EditButton />
        <DeleteButton />
        </Actions>
    </Datagrid>
    </List>
  );
}