import { useState } from "react";

const CERTIFICADOS = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner"
  },
  {
    id: 2,
    title: "AWS Serverless APIs & Apps"
  },
  {
    id: 3,
    title: "Git Complete"
  },
  {
    id: 4,
    title: "Introduction to Agile - Scrum and Kanban"
  },
  {
    id: 5,
    title: "JavaScript Basics for Beginners"
  },
  {
    id: 6,
    title: "NodeJS: Advanced Concepts"
  },
  {
    id: 7,
    title: "NodeJS Tutorial and Projects"
  }
]

export default function CertificadosHook() {
  const [cert, setCert] = useState(CERTIFICADOS)

  return {cert, setCert, CERTIFICADOS}
}