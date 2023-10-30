import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VideoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="file" source="file" />
      </SimpleForm>
    </Edit>
  );
};
