import { Layout } from "../../../components/layouts";
import { supabase } from "../../../lib/supabaseClient";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { Button } from "../../../components/block/button";
import { ReactNode } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { season, id } = context.params;
  const { data, error } = await supabase
    .from("grandprix")
    .select(`year, name, info, image, circuit(circuit_id, name)`)
    .eq("circuit_id", id)
    .eq("year", season);

  console.log(data);

  return {
    props: {
      data,
    },
  };
};

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full py-5 max-w-4xl self-center">{children}</section>
  );
};

export default function DetailView(props) {
  const { year, name, info, image, circuit } = props.data[0];
  return (
    <Layout title={name}>
      <Section>
        <h1 className="font-bold text-2xl">{name}</h1>
        <div className="flex text-sm text-surface gap-2">
          <Link href={`/season/${year}`}>{`${year} season`}</Link>
          <Link href={`/circuit/${circuit.circuit_id}`}>{circuit.name}</Link>
        </div>
      </Section>
      <Section>
        <h1 className="font-semibold text-xl mb-2">Session</h1>
        <div className="rounded-lg bg-white border border-default py-3 px-5 min-h-[200px] flex items-center justify-center">
          {/* <Button color="primary">Create Session</Button> */}
          <div className="w-1/3 flex flex-col">
            <div>Practice 1</div>
            <div>Practice 2</div>
            <div>Practice 3</div>
            <div>Qualifying</div>
            <div>Race</div>
          </div>
          <div className="w-2/3 m-2 self-start">
            <div>schedule</div>
            <div>podium</div>
            <div>result</div>
          </div>
        </div>
      </Section>
      <Section>
        <h1 className="font-semibold text-xl mb-2">Race Result</h1>
      </Section>
      <Section>
        <h1 className="font-semibold text-xl mb-2">Information</h1>
        <div>{info}</div>
      </Section>
    </Layout>
  );
}
