import { useStaff } from "@/http/requests/staff/useStaff";
import { houseColors } from "@/styles/houseColors";
import backgroundStaff from "@/assets/image/background-staff.jpg";
import { CatalogPageLayout } from "@/layouts/components/CatalogPageLayout";
import { usePageTitle } from "@/hook/usePageTitle";

export function Staff() {
  const { staff, isLoading } = useStaff();
  usePageTitle("Staff - Wizardpedia");

  return (
    <CatalogPageLayout
      title="Hogwarts Staff"
      type="staff"
      background={backgroundStaff}
      items={staff}
      isLoading={isLoading}
      getColor={(member) =>
        houseColors[member.house as keyof typeof houseColors] ||
        houseColors.default
      }
    />
  );
}
