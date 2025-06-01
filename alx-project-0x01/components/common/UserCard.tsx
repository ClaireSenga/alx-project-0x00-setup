// components/common/UserCard.tsx

import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {name} ({username})
      </h2>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Phone:</span> {phone}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-semibold">Website:</span>{" "}
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {website}
        </a>
      </p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
        <p className="text-gray-700">
          {address.suite}, {address.street}, {address.city}, {address.zipcode}
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold text-gray-800 mb-1">Company</h3>
        <p className="text-gray-700">{company.name}</p>
        <p className="text-sm text-gray-600 italic">"{company.catchPhrase}"</p>
        <p className="text-sm text-gray-600">{company.bs}</p>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;
