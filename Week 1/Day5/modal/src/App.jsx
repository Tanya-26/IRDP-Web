
import Modal from "./Components/Modal"
const App = () => {
  return (
    <div>
      <Modal/>
      <div className="content">
        <h1>Welcome to My Website</h1>

        {[...Array(50)].map((_, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            This content is here to make the page scrollable.
          </p>
        ))}
      </div>
    </div>
  )
}

export default App

// import { useState } from "react";

// // Composition approach
// function Modal({ isOpen, onClose, title, children, footer }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-6 max-w-md w-full">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">{title}</h2>
//           <button onClick={onClose}>×</button>
//         </div>

//         <div className="mb-4">
//           {children}
//         </div>

//         {footer && (
//           <div className="flex justify-end gap-2">
//             {footer}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // Usage: Flexible composition
// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="p-4">
//       <button
//         onClick={() => setIsOpen(true)}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Open Modal
//       </button>

//       <Modal
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         title="Confirm Action"
//         footer={
//           <>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="px-4 py-2 border rounded"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={() => alert("Confirmed!")}
//               className="px-4 py-2 bg-red-500 text-white rounded"
//             >
//               Confirm
//             </button>
//           </>
//         }
//       >
//         <p>Are you sure you want to continue?</p>
//       </Modal>
//     </div>
//   );
// }

// export default App;
// import { useState, useEffect } from "react";

// function useAuth() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     checkAuth()
//       .then(setUser)
//       .finally(() => setLoading(false));
//   }, []);

//   const login = async (credentials) => {
//     const user = await loginAPI(credentials);
//     setUser(user);
//   };

//   const logout = () => {
//     logoutAPI();
//     setUser(null);
//   };

//   return { user, loading, login, logout };
// }

// // Usage
// function Dashboard() {
//   const { user, loading, logout } = useAuth();

//   if (loading) return <div>Loading...</div>;

//   if (!user) return <div>Please login</div>;

//   return (
//     <div>
//       <h1>Welcome, {user.name}!</h1>
//       <p>Email: {user.email}</p>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// }

// export default Dashboard;