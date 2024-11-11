import { SOCKET_IO_TOKEN } from "src/constants";
import { SocketIoService } from "./socket-io.service";
import { TT2Service } from "src/tt2.service";

export const socketIoProvider = {
  provide: SOCKET_IO_TOKEN,
  useFactory: (socketIoService: SocketIoService, tt2Service: TT2Service) => {
    let raidInstance = socketIoService.createSocketInstance('raid');
    raidInstance.on('connect', socketIoService.onConnectEventHandler);
    raidInstance.on('attack', socketIoService.onAttackEventHandler);
    raidInstance.on('start', socketIoService.onRaidStartEventHandler);

    raidInstance.connect();

    let playerInstance = socketIoService.createSocketInstance('player');
    // playerInstance.on('connect', tt2Service.getPlayerData);
    playerInstance.connect();
  },
  inject: [SocketIoService, TT2Service]
}