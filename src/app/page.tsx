import { Backend } from "@/components/backend/Backend";
import { Blockchain } from "@/components/blockchain/Blockchain";
import { Frontend } from "@/components/frontend/Frontend";
import { Mobile } from "@/components/mobile/Mobile";
import { OthersSkills } from "@/components/othersSkills/OthersSkills";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="block">
        <h1 className="technology">⛓ Blockchain:</h1>
        <div className="block_skills">
          <Blockchain />
        </div>
      </div>
      <div className="block">
        <h1 className="technology">🌝 Frontend:</h1>
        <div className="block_skills">
          <Frontend />
        </div>
      </div>
      <div className="block">
        <h1 className="technology">🌚 Backend:</h1>
        <div className="block_skills">
          <Backend />
        </div>
      </div>
      <div className="block">
        <h1 className="technology">📱 Mobile:</h1>
        <div className="block_skills">
          <Mobile />
        </div>
      </div>
      <div className="block">
        <h1 className="technology">✍ Другие скиллы:</h1>
        <div className="block_skills">
          <OthersSkills />
        </div>
      </div>
    </div>
  );
}
