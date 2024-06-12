import { Icons } from "@/components/icons";


const MyDatabases = () => {
  return (
    <div className="wrapper">
      <div className="item_2 item1 flex items-center justify-center">
        {/* github */}
        <Icons.github />
      </div>

      <div className="item_2 item2 flex items-center justify-center">
        {/* git */}
        <Icons.git />
      </div>
      

      <div className="item_2 item4 flex items-center justify-center">
        {/* python */}
        <Icons.python />
      </div>

      <div className="item_2 item5 flex items-center justify-center">
        {/* flask */}
        <Icons.flask />
      </div>

      <div className="item_2 item6 flex items-center justify-center">
        {/* fastapi */}
        <Icons.fastapi />

      </div>

      <div className="item_2 item8 flex items-center justify-center">
        {/* pstgresSQL */}
        <Icons.pstgresSQL />
      </div>
      <div className="item_2 item9 flex items-center justify-center">
        {/* nodejs */}
        <Icons.nodejs />
      </div>
      <div className="item_2 item10 flex items-center justify-center">
        {/* sqlite */}
        <Icons.sqlite />
      </div>
    </div>
  );
};

export default MyDatabases;
