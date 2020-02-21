import { Category } from '../../categories/shared/category.model';

export class Entry {
    
    constructor(
        public id: number = null,
        public name: string = null,
        public description: string = null,
        public type: string = null,
        public amount: string = null,
        public date: string = null,
        public paid: boolean = false,
        public categoryId: number = null,
        public category: Category = null
    ) { }

    static types = {
        expense: 'Despesa',
        revenue: 'Receita'
    }

    get paidText(): string {
        return this.paid ? 'Pago' : 'Pendente';
    }
}