import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

export class PromotionService {

    constructor() { }
    getPromotions(): Promotion[] {
        return PROMOTIONS;
    }

    getPromotion(id: string): Promotion {
        return PROMOTIONS.filter((promo) => (promo.id === id))[0];
    }

    getFeaturedPromotion(): Promotion {
        return PROMOTIONS.filter((promotion) => promotion.featured)[0];
    }
}