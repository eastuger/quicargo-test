import * as express from 'express';
import {Carrier} from "../models/Carrier";
import {logger} from "../index";
import {Truck} from "../models/Truck";
import {error} from "winston";
import {getDistance} from "../helpers";

const router = express.Router();

router.put('/trucks/:truck_id', async (req: express.Request, res: express.Response) => {

    try {
        await Truck.update(
            {
                lng: req.body.lng,
                lat: req.body.lat,
                license_plate: req.body.license_plate,
                max_weight: req.body.max_weight,
                current_weight: req.body.current_weight,
                max_pallets: req.body.max_pallets,
                current_pallets: req.body.current_pallets,
            }, {where: {id: req.params.truck_id}}
        )

        return res.sendStatus(204)

    } catch (error) {
        logger.log('error', error)
        return res.sendStatus(500)
    }


});

router.post('/carriers/:carrier_id/trucks', async (req: express.Request, res: express.Response) => {
    try {
        let distances = []

        const carrier = await Carrier.findByPk(req.params.carrier_id, {include: [Truck]})

        carrier.trucks.forEach((truck, index) => {
            const distance = getDistance(truck.lat, truck.lng, req.body.route.pickup.lat, req.body.route.pickup.lng)

            if(distance <= req.body.radius) {
                distances.push({truck_id: truck.id, distance: distance})
            }

        })

        return res.send(distances)

    } catch (error) {
        logger.log('error', error)
        return res.sendStatus(500)
    }

})
export default router;