
const Newuser = async () => {
    const Addnewuser = await fetch('');
    if(!Addnewuser.ok){
        throw new Error('failed to add new User');
    } 
    const newUser = await Addnewuser.json();
    return newUser;
}

const fetchUsers = async () => {
    const response = await fetch('http://localhost:3020/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
  };

  
const updateUser = async () => {
    const response = await fetch('');
    if(!response.ok){
        throw new Error('Failed to Update the User detials');
    }

    const data = await response.json();
    return data;
  };


const DeleteUser = async () => {
    const response = await fetch('');
    if(!response.ok){
        throw new Error('Failed to Delete the User');
    }

    const data = await response.json();
    return data;
}