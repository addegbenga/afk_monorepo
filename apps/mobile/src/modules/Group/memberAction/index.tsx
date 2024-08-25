// import React, {useState} from 'react';
// import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';

// import {AdminIcon, CheckIcon, RemoveIcon} from '../../../assets/icons';
// import {useStyles} from '../../../hooks';
// import stylesheet from './styles';

// const permissions = [
//   'Add members',
//   'Remove members',
//   'Edit group info',
//   'Delete messages',
//   'Pin messages',
// ];

// const MemberActions = ({
//   onClose,
//   onMakeAdmin,
//   onRemove,
// }: {
//   onClose: () => void;
//   onMakeAdmin: (val: string[]) => void;
//   onRemove: () => void;
// }) => {
//   const styles = useStyles(stylesheet);
//   const [showPermissions, setShowPermissions] = useState(false);
//   const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

//   const togglePermission = (permission: string) => {
//     setSelectedPermissions((prevState) =>
//       prevState.includes(permission)
//         ? prevState.filter((p) => p !== permission)
//         : [...prevState, permission],
//     );
//   };

//   const handleMakeAdmin = () => {
//     onMakeAdmin(selectedPermissions);
//     onClose();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.card} onPress={() => setShowPermissions(true)}>
//         <AdminIcon color="#007AFF" />
//         <Text style={styles.cardText}>Make group admin</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={[styles.card, styles.removeCard]} onPress={onRemove}>
//         <RemoveIcon color="#FF3B30" />
//         <Text style={[styles.cardText, styles.removeText]}>Remove from group</Text>
//       </TouchableOpacity>

//       <Modal visible={showPermissions} transparent={true} animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Admin Permissions</Text>
//             <ScrollView>
//               {permissions.map((permission) => (
//                 <TouchableOpacity
//                   key={permission}
//                   style={styles.permissionItem}
//                   onPress={() => togglePermission(permission)}
//                 >
//                   <Text style={styles.permissionText}>{permission}</Text>
//                   {selectedPermissions.includes(permission) && <CheckIcon color="#007AFF" />}
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//             <TouchableOpacity style={styles.confirmButton} onPress={handleMakeAdmin}>
//               <Text style={styles.confirmButtonText}>Confirm</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default MemberActions;
