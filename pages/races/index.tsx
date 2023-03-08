import { ChangeEvent, useState } from "react";
import { Button } from "../../components/block/button";
import { Layout } from "../../components/layouts";
import { Modal } from "../../components/layouts/modal/modal";
import { supabase } from "../../lib/supabaseClient";
import { Input } from "../../components/block/input";
import type { GrandPrix } from "../../types/types";

// get server data
export async function getServerSideProps() {
  const { data, error } = await supabase.from("grandprix").select();
  if (error) console.log(error);
  console.log(data);
  return {
    props: {
      grandPrixes: data,
    },
  };
}

// insert data
export async function insertData({ data }: { data: GrandPrix["Insert"] }) {
  const { error } = await supabase.from("grandprix").insert(data);
  if (error) console.log(error);
}

const types = {
  Tables: {
    grandprix: {
      insert: {
        name: { val: null, type: "text" },
        year: { val: null, type: "select", ref: "season" },
        circuit_id: { val: null, type: "select", ref: "circuit" },
        info: { val: null, type: "textarea" },
      },
    },
  },
};

// Add Content Modal
export const GrandPrixModal = () => {
  const data = types.Tables.grandprix.insert;
  const [input, setInput] = useState(data);

  const handleChange = (id: string, event: ChangeEvent<HTMLInputElement>) => {
    let data = { ...input };
    data[id].val = event.target.value;
    setInput(data);
  };

  return (
    <Modal>
      <h1 className="text-xl font-semibold mb-10">Add New Grand Prix</h1>
      <div className="flex flex-col">
        {Object.keys(input).map((key, i) => (
          <Input
            key={i}
            id={key}
            type={input[key].type}
            value={input[key].name}
            label={key.replace("_", " ").toUpperCase()}
            reference={input[key].ref}
            onChange={(e) => handleChange(key, e)}
          ></Input>
        ))}
      </div>
      <div className="self-end">
        <Button onClick={() => console.log(input)}>Save</Button>
      </div>
    </Modal>
  );
};

// Function
export default function GrandPrixPage({ grandPrixes }) {
  return (
    <Layout title="Grand Prix">
      <h1 className="text-2xl font-bold">Grand Prix</h1>
      <GrandPrixModal />
      <section className="flex">
        {grandPrixes.map((gp: GrandPrix["Row"]) => (
          <div key={gp.circuit_id.toString() + gp.year}>{gp.name}</div>
        ))}
      </section>
    </Layout>
  );
}
