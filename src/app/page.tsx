import { Backend } from "@/components/backend/Backend";
import { Blockchain } from "@/components/blockchain/Blockchain";
import { Frontend } from "@/components/frontend/Frontend";
import { Mobile } from "@/components/mobile/Mobile";
import { OthersSkills } from "@/components/othersSkills/OthersSkills"

export default function Home() {
  return (
    <div className="wrapper">
      <div>
        <h1 className="technology">⛓ Blockchain:</h1>
        <Blockchain />
      </div>
      <div>
        <h1 className="technology">🌝 Frontend:</h1>
        <Frontend />
      </div>
      <div>
        <h1 className="technology">🌚 Backend:</h1>
        <Backend />
      </div>
      <div>
        <h1 className="technology">📱 Mobile:</h1>
        <Mobile />
      </div>
      <div>
        <h1 className="technology">✍ Другие скиллы:</h1>
        <OthersSkills/>
      </div>
    </div>
  );
}
