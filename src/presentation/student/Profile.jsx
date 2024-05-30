import { Fragment } from "react";
import { button } from "../../constants/formConstants";
import ProfileContainer from "../../container/Student/ProfileContainer";
import ButtonLoader from "../../shared/ButtonLoader";
import CustomButton from "../../shared/CustomButton";
import CustomInput from "../../shared/CustomInput";

const Profile = () => {
  const {
    edit,
    input,
    profile,
    loading,
    updateLoading,
    handleEdit,
    handleCancel,
    handleUpdate,
    handleNameChange,
  } = ProfileContainer();

  if (loading) {
    return <ButtonLoader />;
  }

  return (
    <section style={style}>
      Name:
      {!edit ? (
        <h3>{profile?.name}</h3>
      ) : (
        <CustomInput value={input} onChange={handleNameChange} />
      )}
      Email: <h3>{profile?.email}</h3>
      {!edit ? (
        <CustomButton type={button} label="Edit" onClick={handleEdit} />
      ) : (
        <Fragment>
          <CustomButton type={button} label="Save" onClick={handleUpdate} />
          <CustomButton type={button} label="Cancel" onClick={handleCancel} />
          {updateLoading && <ButtonLoader />}
        </Fragment>
      )}
    </section>
  );
};

export default Profile;

const style = {
  marginLeft: 150,
};
