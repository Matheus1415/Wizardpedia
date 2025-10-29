import { HouseNamePT } from "@/data/langs/HouseNamePT";
import { houseColors } from "@/styles/houseColors";
import type { Character } from "@/types/Character";
import { Badge, Card, Image, ScrollArea } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Heart, Home, Star, User, Wand2 } from "lucide-react";
import defaultImageStudants from "@/assets/image/default-card-students.jpg";

interface StudentCardProps {
  student: Character;
}

export function StudentCard({ student }: StudentCardProps) {
  const houseColor = houseColors[student?.house ?? "default"];
  const isMobile = useMediaQuery(`(max-width: 767px)`);
  const housePT =
    student.house !== ""
      ? HouseNamePT[student.house as keyof typeof HouseNamePT] ||
        HouseNamePT.Default
      : HouseNamePT.Default;

  return (
    <Card
      shadow="xl"
      radius="lg"
      p="lg"
      className="mx-auto"
      style={{
        width: "95%",
        maxWidth: 1000,
        backgroundColor: "#1a1a1a90",
        color: "#fff",
      }}
    >
      <div className="row g-4 align-items-start">
        <div className={isMobile ? "col-12" : "col-md-5"}>
          <Image
            src={student.image || defaultImageStudants}
            alt={student.name}
            radius="lg"
            fit="cover"
            height={isMobile ? 250 : 600}
            width="100%"
            style={{ objectFit: "cover", border: `3px solid ${houseColor}` }}
          />
        </div>

        <div className={isMobile ? "col-12" : "col-md-7"}>
          <ScrollArea
            style={{ height: isMobile ? 400 : 600 }}
            type="auto"
            scrollbarSize={8}
          >
            <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap">
              <div className="text-start mb-3">
                <h2
                  className="fw-bold text-white mb-2"
                  style={{ fontSize: isMobile ? "1.5rem" : "2rem" }}
                >
                  {student.name}
                </h2>
                {student.actor && (
                  <p
                    className="text-muted fst-italic mb-2"
                    style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}
                  >
                    Interpretado por{" "}
                    <span className="text-warning fw-semibold">
                      {student.actor}
                    </span>
                  </p>
                )}
              </div>

              <Badge
                color={houseColor}
                variant="filled"
                size={isMobile ? "md" : "lg"}
                className="shadow-sm px-3 py-2 mb-2"
                style={{
                  fontSize: isMobile ? "0.8rem" : "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {housePT}
              </Badge>
            </div>

            <div className="row g-3">
              {[
                {
                  icon: <Home size={22} color={houseColor} />,
                  label: "Casa",
                  value: housePT,
                },
                {
                  icon: <Star size={22} color="#FFD700" />,
                  label: "Patrono",
                  value: student.patronus || "Desconhecido",
                },
                {
                  icon: null,
                  label: "Nascimento",
                  value: student.dateOfBirth || "Desconhecido",
                },
                {
                  icon: null,
                  label: "Olhos",
                  value: student.eyeColour || "Desconhecido",
                },
                {
                  icon: null,
                  label: "Cabelos",
                  value: student.hairColour || "Desconhecido",
                },
                {
                  icon: null,
                  label: "Ancestralidade",
                  value: student.ancestry || "Desconhecida",
                },
                {
                  icon: <User size={22} color="#a0a0a0" />,
                  label: "Espécie",
                  value: student.species,
                },
                {
                  icon: (
                    <Heart
                      size={22}
                      color={student.alive ? "#E6B83C" : "#CD5656"}
                    />
                  ),
                  label: "Status",
                  value: student.alive ? "Vivo" : "Falecido",
                },
                {
                  icon: <Wand2 size={22} color="#29F598" />,
                  label: "Tipo",
                  value: student.wizard ? "Bruxo" : "Trouxa",
                },
              ].map((item, idx) => (
                <div key={idx} className="col-6 text-start">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    {item.icon}
                    <span className="fw-semibold fs-5">{item.label}</span>
                  </div>
                  <span className="fs-5">{item.value}</span>
                </div>
              ))}

              {student.wand && (
                <div className="col-12 text-start mt-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Wand2 size={26} />
                    <span className="fw-bold fs-5">Varinha</span>
                  </div>
                  <div className="ms-4 fs-5">
                    <div>
                      <strong>Madeira:</strong>{" "}
                      {student.wand.wood || "Desconhecida"}
                    </div>
                    <div>
                      <strong>Núcleo:</strong>{" "}
                      {student.wand.core || "Desconhecido"}
                    </div>
                    <div>
                      <strong>Comprimento:</strong> {student.wand.length || "?"}{" "}
                      pol.
                    </div>
                  </div>
                </div>
              )}

              {student.alternate_names?.length > 0 && (
                <div className="col-12 text-start mt-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="fw-bold fs-5">Outros nomes</span>
                  </div>
                  <div className="ms-4 fst-italic text-muted fs-5">
                    {student.alternate_names.join(", ")}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </Card>
  );
}
