import { Check, X } from "lucide-react";

export default function PermissionsTable({ permissions }) {
  return (
    <div className="my-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th className="px-4 py-2 font-medium text-gray-500 dark:text-gray-400">
              Role
            </th>
            <th className="px-4 py-2 font-medium text-gray-500 dark:text-gray-400">
              Access
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {permissions.map((permission) => (
            <tr key={permission.role}>
              <td className="px-4 py-2 font-medium">{permission.role}</td>
              <td className="px-4 py-2">
                <span className="flex items-center gap-1.5">
                  {permission.access ? (
                    <Check size={15} className="text-green-600" />
                  ) : (
                    <X size={15} className="text-red-500" />
                  )}
                  {permission.label ??
                    (permission.access ? "Allowed" : "Not allowed")}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
