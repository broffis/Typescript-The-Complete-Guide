import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}
  
  abstract renderItem(model: T, itemParent: Element): void

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');

    // For some reason the array has a 0 length but contains 3 elements
    for (let model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent)
    }

    this.parent.append(templateElement.content);
  }
}