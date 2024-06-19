import { SOCKET_IO_TOKEN } from "src/constants";
import { SocketIoService } from "./socket-io.service";

export const socketIoProvider = {
  provide: SOCKET_IO_TOKEN,
  useFactory: (socketIoService: SocketIoService) => {
    let raidInstance = socketIoService.createSocketInstance('raid');
    raidInstance.on('connect', socketIoService.onConnectEventHandler);
    raidInstance.on('start_attack', socketIoService.onAttackEventHandler);

    raidInstance.connect();
  },
  inject: [SocketIoService]
}